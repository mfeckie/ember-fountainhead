import FountainheadSVG from 'ember-fountainhead/components/fountainhead-svg';
import config from '../../config/environment';

const filePath = config.environment === 'production'
    ? '/ember-fountainhead/ember-fountainhead/svg/symbol-defs.svg'
    : '/ember-fountainhead/svg/symbol-defs.svg';

/**
 * In the demo application we need to override the svg component to handle our
 * gh-pages prod app requiring a special path.
 * @class FountainHead.Shared.FountainheadSVG
 * @constructor
 * @extends FountainHead.Shared.FountainheadSVG
 */
export default FountainheadSVG.extend({
  filePath: filePath
});
