import assert from "assert";

export function TestName(dirname: string, klass: {
  prototype: any,
  name: string,
} | undefined,
  testName?: string,
) {
  assert(klass || testName, 'klass or testName must be provided');
  const relativePath = dirname
    .split(process.cwd()).join("")
    .split("/test").join("")
    .split("/").join(".")
    .substring(1);
  return `${relativePath}.${klass?.prototype?.constructor.name || testName}`;

}