// YUIDoc parses folders before files, so this module declaration has to be made
// inside this folder even though it is for the entire /lib directory

/**
 * Modules in the `./lib` directory handle generating -> parsing -> decorating ->
 * saving all data required for Fountainhead. Fountainhead is backed by REST APIs
 * rather than static file generation. Each module, class and file are saved as
 * JSON fetched on demand by the client.
 *
 * See this module for details/classes on the Node data generation application.
 * See below for a high level overview of the flow of the application through
 * the related modules.
 *
 * ## Lib Classes Overview
 *
 * #### Validation && Preparation
 * - `index.js`: Primary entry point to Node application
 * - `decorate-config`: Validate and merge addon configs, package JSON and default configs
 * - `create-dirs`: Create directories required for JSON files
 *
 * #### Generation && Decoration
 * - `generate-fountainhead-data`: Coordinates parsing raw YUIDoc using `data-types` modules
 * - `data-types/generate-modules`: Parse && decorate raw modules data
 * - `data-types/generate-classes`: Parse && decorate raw class && class items data
 * - `data-types/generate-file`: Parse && decorate source files
 * - `parse-markdown`: Called for every description, parses markdown contents to HTML
 *
 * @module Lib
 */
