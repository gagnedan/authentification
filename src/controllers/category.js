const db = require('../services/database');

exports.category_detail = async (req, res) => {
  const id = req.params.id;
  const categories = await db
    .select('ID_TOC as value', 'HEADER_NAME as text')
    .from('PR_TOC')
    .where('ID_COMPANY', id)
    .orderBy('SEQ_ORDER');

  res.json({
    categories
  });
}