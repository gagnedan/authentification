const db = require('../services/database');

exports.all = async (req, res, next) => {

  const company = await db
    .select('TB_COMPANY_LANGUAGE.NAME as text', 'PR_CONFIG.ID_COMPANY as value')
    .from('PR_CONFIG').innerJoin('TB_COMPANY_LANGUAGE', 'PR_CONFIG.ID_COMPANY', 'TB_COMPANY_LANGUAGE.ID_COMPANY')
    .where({
      'PR_CONFIG.SHOW_SEQUENCER_V2': 'Y',
      'TB_COMPANY_LANGUAGE.LANGUAGE': 'fr-CA'
    });

  if (company) {
    res.json({
      company: company
    })
  } else {
    res.status(422);
    const error = new Error('Company Not found');
    next(error);
  }
}