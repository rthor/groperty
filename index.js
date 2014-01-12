module.exports = function groperty( obj, propList ) {
  if ( typeof obj !== 'object' ) return obj;

  if( Object.prototype.toString.call( propList ) !== '[object Array]' ) {
    propList = propList.replace(/^\./, '').replace(/\.$/, '').split('.');
  }

  propList.forEach(function walkThroughObj ( propName ) {
    obj = obj[ propName ] ? obj[ propName ] : obj;
  });
  
  return obj;
};