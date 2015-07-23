var readFileSync = require( "fs" ).readFileSync;
var parse = JSON.parse;

var readJSONFileSync = function readJSONFileSync( ){
    return parse( readFileSync.apply( null, arguments ) );
};

module.exports = readJSONFileSync;

Object.defineProperty( module.exports, "globalize",
    {
        "writable": false,
        "configurable": false,
        "enumerable": false,
        "value": function globalize( ){
            global.readJSONFileSync = readJSONFileSync;

            return readJSONFileSync;
        }
    } );
