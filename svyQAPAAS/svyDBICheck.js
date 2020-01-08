/**
 * Process status for display purposes
 * @public 
 * @type {String}
 * @properties={typeid:35,uuid:"D2773FFF-26DA-4FF8-8315-466969E1C44C"}
 */
var status = ""

/**
 * @private 
 * @properties={typeid:35,uuid:"0FE12E5B-7EE7-4BC0-89BB-C71EE1B43CEE",variableType:-4}
 */
var sep = scopes.svyIO.getFileSeperator()

/**
 * @private
 * @properties={typeid:24,uuid:"DF42CED9-4B84-49D6-8815-8FED0431AA5D"}
 */
function getWorkspacePath() {
	var workspacePath = java.lang.System.getProperty("osgi.instance.area");
	if (scopes.svySystem.isWindowsPlatform()) {
		return workspacePath.substr(6, workspacePath.length);
	} else {
		return "/" + workspacePath.substr(5, workspacePath.length);
	}
}

/**
 * @private
 * @properties={typeid:24,uuid:"812BD9F2-912D-4C00-AEB8-E7AFA7B25EA1"}
 */
function dbiPath() {
	return getWorkspacePath() + 'resources' + sep + 'datasources' + sep
}

/**
 * @private
 * @properties={typeid:24,uuid:"E248FEAE-DB98-4DB6-9BFC-7E56A3D28060"}
 */
function dataseedPath() {
	return getWorkspacePath() + 'svyQAPAAS' + sep + 'medias' + sep + 'dataseeds' + sep
}

/**
 * Checks if the dbi files in the workspace match the corresponding tables in the database
 * @public 
 * @param {Array<String>} dbs
 *
 * @properties={typeid:24,uuid:"439301A7-67E7-4EE7-8093-2D5149BE8EB3"}
 */
function checkDBIntegrity(dbs) {
	var match = true
	
	for (var d = 0; d < dbs.length; d++) {
		var db = dbs[d]
		application.output("checking " + db)
		status = "Checking '" + db + "'..."
		var dbDBI = dbiPath() + db + sep
		var filenames = []
		var files = plugins.file.getFolderContents(dbDBI)

		for (var f = 0; f < files.length; f++) {
			var file = files[f]
			var filename = file.getName()
			if (filename.split(".").pop() == "dbi") {
				filename = filename.slice(0, -4)
				filenames.push(filename)
			}
		}

		var tables = databaseManager.getTableNames(db)

		if (!arr_diff(tables, filenames)) {
			return false
		}

		for (var t = 0; t < tables.length; t++) {
			var table = databaseManager.getTable(db, tables[t])
			match = checkTableIntegrity(table) && match

		}
	}
	return match
}

/**
 * Checks if table columns match the ones in the corresponding .dbi file
 * @private
 * @param {JSTable} table
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"DC5D6BB0-6FF2-4414-B5FC-DC9389F54EFE"}
 */
function checkTableIntegrity(table) {
	//we should potentially check for table properties other than name as well
	//good enough for now
	var OK = true
	var serverName = table.getServerName()
	var tableName = table.getSQLName()
	var dbi = dbiPath() + serverName + sep + tableName + '.dbi'

	var dbiFile

	if (plugins.file.getFileSize(dbi) > 0) {
		dbiFile = plugins.file.readTXTFile(dbi)
	} else {
		return false
	}

	var json = jsonify(dbiFile)

	if (json.columns.length == table.getColumnNames().length) {
		var columns = table.getColumnNames()
		var jcolumns = []
		for (var j = 0; j < json.columns.length; j++) {
			var jcolumn = json.columns[j]
			jcolumns.push(jcolumn.name)
		}
		OK = arr_diff(columns, jcolumns)
	} else {
		OK = false
	}
	return OK
}

/**
 * Helper function to parse .dbi files into JSON object
 * @private
 * @param {String} dbi
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"B60B8061-6022-4A94-AA20-F8F3BCFA5B0A"}
 */
function jsonify(dbi) {
	dbi = dbi.replace(/\r?\n/g, '\n"');
	dbi = dbi.replace(/:\s*/g, '":')
	dbi = dbi.replace(/"{/g, '{')
	dbi = dbi.replace(/"}/g, '}')
	dbi = dbi.replace(/"]/g, ']')
	dbi = dbi.replace("columns\"", "\"columns\"")
	dbi = "{" + dbi + "}"
	return JSON.parse(dbi)
}

/**
 * Helper function to compare two Arrays of Strings
 * @param {Array<String>} a1
 * @param {Array<String>} a2
 * @properties={typeid:24,uuid:"F00C6885-41C9-4807-A0FC-BCAEC476390C"}
 */
function arr_diff(a1, a2) {
	if (a1.length > 0 && a2.length > 0) {
		a1.sort()
		a2.sort()
		if (JSON.stringify(a1) === JSON.stringify(a2)) {
			return true
		}
	}
	return false
}

/**
 * Deletes all existing dataseed.zip files, to avoid orphaned dataseeds 
 * @public 
 * @properties={typeid:24,uuid:"8E5593F6-80B3-45F0-8057-1C9F5DEC7278"}
 */
function deleteAllDataseeds() {
	var dsfiles = plugins.file.getFolderContents(dataseedPath())
	for (var f = 0; f < dsfiles.length; f++) {
		plugins.file.deleteFile(dsfiles[f])

	}
}
