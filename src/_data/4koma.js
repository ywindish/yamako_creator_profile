const fs = require('fs');
const path = require('path');

module.exports = function() {
  // TSVファイルを読み込み
  const tsvPath = path.join(__dirname, './4koma.tsv');
  const tsvContent = fs.readFileSync(tsvPath, 'utf-8');
  
  // TSVをパース
  const lines = tsvContent.trim().split('\n');
  const headers = lines[0].split('\t');
  
  const comics = lines.slice(1).map(line => {
    const values = line.split('\t');
    const comic = {};
    headers.forEach((header, index) => {
      comic[header] = values[index] || '';
    });
    // image_pathはfile_nameをそのまま使用
    comic.image_path = comic.file_name || '';
    return comic;
  });
  
  return comics;
};
