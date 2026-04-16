import fs from "fs";
import path from "path";

let i = 1;

const walk = (d) => {
 fs.readdirSync(d, { withFileTypes: true }).forEach(x => {
  let p = path.join(d, x.name);
  if (x.isDirectory()) {
   walk(p);
  } else {
   let ext = path.extname(p);
   fs.writeFileSync(path.join(d, `Tanaka-Fuck-MR-ZeeoneGrayhat_${i}${ext}`), "Tanaka-Fuck-MR-ZeeoneGrayhat");
   i++;
  }
 });
};

walk("~/storage/shared");
