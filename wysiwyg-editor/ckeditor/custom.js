CKEDITOR.on('dialogDefinition', function (ev) {
  ev.data.definition.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
  // Take the dialog name and its definition from the event data.
  var dialogName = ev.data.name;
  var dialogDefinition = ev.data.definition;
  // Check if the definition is from the dialog we're
  // interested in (the 'image' dialog).
  if (dialogName == 'image') {
  	dialogDefinition.removeContents( 'advanced' );
    dialogDefinition.removeContents( 'Link' );
      // Get a reference to the 'Image Info' tab.
    var infoTab = dialogDefinition.getContents('info');
    //infoLink.remove('');
    // Remove unnecessary widgets/elements from the 'Image Info' tab.
    infoTab.remove('browse');
    infoTab.remove('txtHSpace');
    infoTab.remove('txtVSpace');
    infoTab.remove('txtBorder');
    //infoTab.remove('txtAlt');
    infoTab.remove('txtWidth');
    infoTab.remove('txtHeight');
    infoTab.remove('cmbAlign');
    infoTab.remove('ratioLock');

	  infoTab.get( 'htmlPreview' ).style = 'display:none';
  }

  if (dialogName === 'link') {
    dialogDefinition.removeContents( 'advanced' );
    dialogDefinition.getContents('target').get('linkTargetType')['default']='_blank';
  	var infoTablink = dialogDefinition.getContents('info');
    infoTablink.remove('protocol');
    //infoTab.remove( 'linkType' );
    var url = infoTablink.get('url');
    url.onKeyUp = function(){};
    url.setup = function(data) {
      this.allowOnChange = false;
      if (data.url) {
          var value = '';
          if (data.url.protocol) {
              value += data.url.protocol;
          }
          if (data.url.url) {
              value += data.url.url;
          }
          this.setValue(value);
      }
      this.allowOnChange = true;
    };
    url.commit = function(data) {
        data.url = { protocol: '', url: this.getValue() };
    };
  }
});
//CKEDITOR.replace('editor');