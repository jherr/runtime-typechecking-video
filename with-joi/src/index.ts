import fs from "fs";

import { ResultSchema } from "./schemas/ResultSchema";
import type { Result } from "./interfaces/Result";

const printJobs = (results: Result) => {
  const validataionResult = ResultSchema.validate(results);
  if (!validataionResult.error) {
    console.log(results.results.map(({ job }) => `${job}`).join("\n"));
  } else {
    console.error(validataionResult.error.toString());
  }
};

// printJobs({
//   results: [
//     {
//       id: 1,
//       name: "Jack",
//       job: "Programmer",
//     },
//   ],
// });

const data: Result = JSON.parse(fs.readFileSync("./data.json").toString());
printJobs(data);
