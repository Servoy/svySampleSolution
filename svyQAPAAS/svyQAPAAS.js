/**
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3A5947EA-BC8E-4A9A-9A36-92CBA477B860",variableType:4}
 */
var JENKINS_BUILDNR = 0;

/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"01DD3C7F-9EBE-4BC6-A937-F454D4D5BBAD"}
 */
var JENKINS_BUILDDATE = '';

/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"67D9B6F0-C160-4C20-AD5A-9781BD7E252B"}
 */
var SVN_REVISION = '';

/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"95EE8DC1-BE70-4543-B404-4D8C8281134A"}
 */
var GIT_COMMIT = '';

/**
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9ED44650-AC03-4CCB-9212-070A03324EE4"}
 */
var GIT_BRANCH = '';

/**
 * @public 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"B0693CE2-0663-45B7-BAFD-A265E79B3D08"}
 */
function getJenkinsBuildNr() {
	if(JENKINS_BUILDNR === 0) {
		return null;
	} else {
		return JENKINS_BUILDNR;
	}
}


/**
 * @public 
 * @return {Date}
 * 
 * @properties={typeid:24,uuid:"1087F2E1-9D51-4767-B9FC-1083A79E84EF"}
 */
function getJenkinsBuildDate() {
	if(!JENKINS_BUILDDATE) {
		return null;
	} else {
		return utils.parseDate(JENKINS_BUILDDATE,'dd-MM-yyyy HH:mm:ss');
	}
}

/**
 * @public 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"66254580-CAE7-418E-9B85-8AD29305D876"}
 */
function getSvnRevision() {
	if(!SVN_REVISION) {
		return null;
	} else {
		return SVN_REVISION;
	}
}


/**
 * @public 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"5FBD7DD1-BAF2-4665-8E36-B5039D68CFED"}
 */
function getGitCommit() {
	if(!GIT_COMMIT) {
		return null;
	} else {
		return GIT_COMMIT;
	}
}

/**
 * @public 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"77BBE8A6-3A0C-470C-ADF3-1C2466A207E3"}
 */
function getGitBranch() {
	if(!GIT_BRANCH) {
		return null;
	} else {
		return GIT_BRANCH;
	}
}