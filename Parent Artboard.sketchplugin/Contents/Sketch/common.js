function alert(title, message){
  var app = [NSApplication sharedApplication];
  [app displayDialog:message withTitle:title];
}

function add(a, b) {
  return a + b;
}

function moveObject(array, atIndex, toIndex) {
  if (atIndex != toIndex) {
    var object = [[[array objectAtIndex:atIndex] retain] autorelease]

    [array removeObjectAtIndex:atIndex]
    [array insertObject:object atIndex:toIndex]
  }

  return array
}

// From https://github.com/abynim/UserFlows/blob/master/UserFlows.sketchplugin/Contents/Sketch/common.js
function makeExportable(layer, format) {

  var format = (typeof format !== 'undefined') ? format : "png"

    var slice = layer.exportOptions().addExportFormat()
    slice.setFileFormat(format)
    return slice
}