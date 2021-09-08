import * as yup from "yup";
import type { TypeOf } from "yup";
import fs from "fs";

const resultSchema = yup
  .object()
  .required()
  .shape({
    results: yup
      .array()
      .required()
      .of(
        yup.object().required().shape({
          name: yup.string().required(),
          id: yup.number().required(),
          job: yup.string().required(),
        })
      ),
  });

type Result = TypeOf<typeof resultSchema>;

const printJobs = (results: Result) => {
  if (resultSchema.validateSync(results)) {
    console.log(results.results?.map(({ job }) => `${job}`).join("\n"));
  } else {
    console.error("Bad input");
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
