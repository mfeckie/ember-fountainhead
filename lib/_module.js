/**
 * Generation of the JSON data files is handled by the `./lib` assets. High level
 * overview of docs generation:
 *
 * - `index.js`: Script entry called when running `npm run fountainhead`.
 * - `decorate-config`: Validate and merge addon configs with default congis
 * - `clean`: Validate and create documentation output directories
 * - `generate-fountainhead-data`: Parse classes and class items from raw data
 * - `generate-file`: Read source file, decorate with Prism.js and save JSON data
 * - `parse-markdown`: Called for every description, parses markdown contents to HTML
 *
 * @module DocumentationGeneration
 */
