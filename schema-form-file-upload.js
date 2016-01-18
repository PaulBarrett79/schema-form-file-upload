angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/upload/file_upload.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-group\">\n    <div class=\"gallery-box\">\n      <span ng-show=\"$$value$$.file_name\" class=\"title\">{{$$value$$.file_name}}</span>\n      <div ng-if=\"form.uploadOptions.modal.flow.imageOnly\" class=\"img-thumbnail\">\n        <img width=\"200\" ng-src=\"{{$$value$$.file ? $$value$$.file.placeholder : \'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFM0MyNDU2NTM5RDMxMUU0ODk1MEQ4NDhGOUM5NzRGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFM0MyNDU2NjM5RDMxMUU0ODk1MEQ4NDhGOUM5NzRGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUzQzI0NTYzMzlEMzExRTQ4OTUwRDg0OEY5Qzk3NEYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUzQzI0NTY0MzlEMzExRTQ4OTUwRDg0OEY5Qzk3NEYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1RqnIwAAAAZQTFRFzMzMAAAA0zMzZAAAALVJREFUeNrswQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHg0AQYAcq4AAUbpjk4AAAAASUVORK5CYII=\'}}\" />\n      </div>\n      <!-- <button type=\"button\" class=\"{{form.uploadOptions.cssClass || \'btn btn-sm btn-flat btn-success\'}}\" data-template=\"assets/upload/file.html\" bs-modal=\"{{form.uploadOptions.modal}}\" >{{\'buttons.upload_file\' | translate }}</button> -->\n      <div flow-init=\"flow.init\" flow-name=\"filedata.flow\" flow-files-submitted=\"$flow.upload()\"\n             flow-file-added=\"!flow.imageOnly || !!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]\"\n             flow-drop flow-drop-enabled=\"!!flow.dropEnabled\" \n             flow-drag-enter=\"!!flow.dropEnabled ? flowClass=\'flow-drag-enter\' : flowClass={}\" flow-drag-leave=\"flowClass={}\" ng-class=\"flowClass\"\n             flow-file-success=\"flow.fileSuccess($flow, $file, $message, this)\"\n             >\n           <div class=\"file-upload-wrapper center-block\">\n            <!--<div ng-if=\"flow.imageOnly\" class=\"img-thumbnail\" ng-hide=\"$flow.files.length\">\n              <img ng-src=\'data:image/gif;base64,R0lGODdhyACWAOMAAO/v76qqqubm5t3d3bu7u7KystXV1cPDw8zMzAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAyACWAAAE/hDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3TAMFBQO4LAUBAQW+K8DCxCoGu73IzSUCwQECAwQBBAIVCMAFCBrRxwDQwQLKvOHV1xbUwQfYEwIHwO3BBBTawu2BA9HGwcMT1b7Vw/Dt3z563xAIrHCQnzsAAf0F6ybhwDdwgAx8OxDQgASN/sKUBWNmwQDIfwBAThRoMYDHCRYJGAhI8eRMf+4OFrgZgCKgaB4PHqg4EoBQbxgBROtlrJu4ofYm0JMQkJk/mOMkTA10Vas1CcakJrXQ1eu/sF4HWhB3NphYlNsmxOWKsWtZtASTdsVb1mhEu3UDX3RLFyVguITzolQKji/GhgXNvhU7OICgsoflJr7Qd2/isgEPGGAruTTjnSZTXw7c1rJpznobf2Y9GYBjxIsJYQbXstfRDJ1luz6t2TDvosSJSpMw4GXG3TtT+hPpEoPJ6R89B7AaUrnolgWwnUQQEKVOAy199mlonPDfr3m/GeUHFjBhAf0SUh28+P12QOIIgDbcPdwgJV+Arf0jnwTwsHOQT/Hs1BcABObjDAcTXhiCOGppKAJI6nnIwQGiKZSViB2YqB+KHtxjjXMsxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSW6UsEADs=\' />\n            </div>\n            <div ng-if=\"flow.imageOnly\" class=\"img-thumbnail\" ng-show=\"$flow.files.length\">\n              <img width=\"200\" flow-img=\"$flow.files[0]\" />\n            </div>-->\n            <div ng-show=\"$flow.files.length\" class=\"progress progress-striped\" ng-class=\"{active: $flow.files[0].isUploading()}\">\n              <div class=\"progress-bar\" role=\"progressbar\"\n                   aria-valuenow=\"{{$flow.files[0].progress() * 100}}\"\n                   aria-valuemin=\"0\"\n                   aria-valuemax=\"100\"\n                   ng-style=\"{width: ($flow.files[0].progress() * 100) + \'%\'}\">\n                <span class=\"sr-only\">{{$flow.files[0].progress()}}% Complete</span>\n              </div>\n            </div>\n            <div class=\"buttons\" ng-hide=\"$flow.files.length\">\n              <span class=\"btn btn-flat btn-primary\" flow-btn=\"\">{{\'buttons.select_file\' | translate }}<input type=\"file\" multiple=\"multiple\" style=\"visibility: hidden; position: absolute;\"></span>\n              <span ng-hide=\"!!flow.dropEnabled\">\n                <b>{{ \'or\' | translate }}</b>\n                {{ \'drag_drop_file\' | translate }}\n              </span>\n            </div>\n          </div>\n      </div>\n\n\n      <input type=\"hidden\" sf-changed=\"form\" ng-model=\"$$value$$\" schema-validate=\"form\" />\n      <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n<!-- <script type=\"text/ng-template\" id=\"assets/upload/file.html\">\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\" ng-show=\"title\">\n          <button type=\"button\" class=\"close\" ng-click=\"$hide()\">&times;</button>\n          <h4 class=\"modal-title\">{{title}} and extra</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div flow-init=\"flow.init\" flow-name=\"filedata.flow\" flow-files-submitted=\"$flow.upload()\"\n             flow-file-added=\"!flow.imageOnly || !!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]\"\n             flow-drop flow-drop-enabled=\"!!flow.dropEnabled\" \n             flow-drag-enter=\"!!flow.dropEnabled ? flowClass=\'flow-drag-enter\' : flowClass={}\" flow-drag-leave=\"flowClass={}\" ng-class=\"flowClass\"\n             flow-file-success=\"flow.fileSuccess($flow, $file, $message, this)\"\n             >\n            <div class=\"file-upload-wrapper center-block\">\n              --><!--<div ng-if=\"flow.imageOnly\" class=\"img-thumbnail\" ng-hide=\"$flow.files.length\">\n                <img ng-src=\'data:image/gif;base64,R0lGODdhyACWAOMAAO/v76qqqubm5t3d3bu7u7KystXV1cPDw8zMzAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAyACWAAAE/hDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3TAMFBQO4LAUBAQW+K8DCxCoGu73IzSUCwQECAwQBBAIVCMAFCBrRxwDQwQLKvOHV1xbUwQfYEwIHwO3BBBTawu2BA9HGwcMT1b7Vw/Dt3z563xAIrHCQnzsAAf0F6ybhwDdwgAx8OxDQgASN/sKUBWNmwQDIfwBAThRoMYDHCRYJGAhI8eRMf+4OFrgZgCKgaB4PHqg4EoBQbxgBROtlrJu4ofYm0JMQkJk/mOMkTA10Vas1CcakJrXQ1eu/sF4HWhB3NphYlNsmxOWKsWtZtASTdsVb1mhEu3UDX3RLFyVguITzolQKji/GhgXNvhU7OICgsoflJr7Qd2/isgEPGGAruTTjnSZTXw7c1rJpznobf2Y9GYBjxIsJYQbXstfRDJ1luz6t2TDvosSJSpMw4GXG3TtT+hPpEoPJ6R89B7AaUrnolgWwnUQQEKVOAy199mlonPDfr3m/GeUHFjBhAf0SUh28+P12QOIIgDbcPdwgJV+Arf0jnwTwsHOQT/Hs1BcABObjDAcTXhiCOGppKAJI6nnIwQGiKZSViB2YqB+KHtxjjXMsxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSW6UsEADs=\' />\n              </div>\n              <div ng-if=\"flow.imageOnly\" class=\"img-thumbnail\" ng-show=\"$flow.files.length\">\n                <img width=\"200\" flow-img=\"$flow.files[0]\" />\n              </div>--><!--\n              <div ng-show=\"$flow.files.length\" class=\"progress progress-striped\" ng-class=\"{active: $flow.files[0].isUploading()}\">\n                <div class=\"progress-bar\" role=\"progressbar\"\n                     aria-valuenow=\"{{$flow.files[0].progress() * 100}}\"\n                     aria-valuemin=\"0\"\n                     aria-valuemax=\"100\"\n                     ng-style=\"{width: ($flow.files[0].progress() * 100) + \'%\'}\">\n                  <span class=\"sr-only\">{{$flow.files[0].progress()}}% Complete</span>\n                </div>\n              </div>\n              <div class=\"buttons\" ng-hide=\"$flow.files.length\">\n                <span class=\"btn btn-flat btn-primary\" flow-btn=\"\">{{\'buttons.select_file\' | translate }}<input type=\"file\" multiple=\"multiple\" style=\"visibility: hidden; position: absolute;\"></span>\n                <span ng-hide=\"!!flow.dropEnabled\">\n                  <b>{{ \'or\' | translate }}</b>\n                  {{ \'drag_drop_file\' | translate }}\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</script> -->\n");}]);
angular.module('schemaForm-file-upload', ['schemaForm', 'flow']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var file_upload = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'file_upload') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'file_upload';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.object.unshift(file_upload);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
    schemaFormDecoratorsProvider.createDirective('file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
  }]);
