/**
 * Controller for challenge type timeline templates endpoints
 */
const HttpStatus = require('http-status-codes')
const service = require('../services/ChallengeTimelineTemplateService')

/**
 * Search challenge type timeline templates.
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function searchChallengeTimelineTemplates (req, res) {
  const result = await service.searchChallengeTimelineTemplates(req.query)
  res.send(result)
}

/**
 * Create challenge type timeline template.
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function createChallengeTimelineTemplate (req, res) {
  const result = await service.createChallengeTimelineTemplate(req.body)
  res.status(HttpStatus.CREATED).send(result)
}

/**
 * Get challenge type timeline template.
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function getChallengeTimelineTemplate (req, res) {
  const result = await service.getChallengeTimelineTemplate(req.params.challengeTypeTimelineTemplateId)
  res.send(result)
}

/**
 * Fully update challenge type timeline template.
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function fullyUpdateChallengeTimelineTemplate (req, res) {
  const result = await service.fullyUpdateChallengeTimelineTemplate(req.params.challengeTypeTimelineTemplateId, req.body)
  res.send(result)
}

/**
 * Delete challenge type timeline template.
 * @param {Object} req the request
 * @param {Object} res the response
 */
async function deleteChallengeTimelineTemplate (req, res) {
  const result = await service.deleteChallengeTimelineTemplate(req.params.challengeTypeTimelineTemplateId)
  res.send(result)
}

module.exports = {
  searchChallengeTimelineTemplates,
  createChallengeTimelineTemplate,
  getChallengeTimelineTemplate,
  fullyUpdateChallengeTimelineTemplate,
  deleteChallengeTimelineTemplate
}
