import fs = require('fs');
import { date } from 'date-handle';

export const fs_logger = async (data: any, path?: string) => {
  const final_path = __dirname + path ? path : 'log_' + date.nowFully + '.log';
  return fs.writeFileSync(String(final_path), data);
};
