import fs from "fs";

interface Result {
  results: {
    id: number;
    name: string;
    job: string;
  }[];
}

const printJobs = (results: Result) => {
  results?.results?.forEach(({ job }) => {
    console.log(job);
  });
};

// printJobs({
//   results: [
//     {
//       id: 1,
//       name: "John",
//       job: "developer",
//     },
//   ],
// });

const data: Result = JSON.parse(fs.readFileSync("data.json", "utf-8"));
printJobs(data);
