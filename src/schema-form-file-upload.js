angular.module('schemaForm-file-upload', ['schemaForm', 'flow']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    //directive for edit mode
    console.log('schemaFormProvider', schemaFormProvider)
    var file_upload = function(name, schema, options) {
      if (schema.type === 'object' && schema.format == 'file_upload') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        console.log('form is',f)
        f.key  = options.path;
        //f.type = 'file_upload';
        if (schema.default.view_mode == 'view') {
          f.type = 'attachmentlist';
        }
        else {
          f.type = 'file_upload';
        }
        console.log('form type in directive: ', f.type);
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
      
    };

    /*var file_upload_view = function(name, schema, options) {
      if (schema.type === 'object' && schema.format == 'file_upload' && schema.default.view_mode == 'view') {
        console.log('this should be finding view');
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'file_upload_view';

        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
      
    };*/

    schemaFormProvider.defaults.object.unshift(file_upload);
    //schemaFormProvider.defaults.object.unshift(file_upload_view);


  //Add to the bootstrap directive

    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'attachmentlist',
    'directives/decorators/bootstrap/upload/file_upload_view.html');
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
    schemaFormDecoratorsProvider.createDirective('attachmentlist',
    'directives/decorators/bootstrap/upload/file_upload_view.html');
    schemaFormDecoratorsProvider.createDirective('file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
  }]);
