/*
 *  Place copyright or other info here...
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    // Instantiates plugin
    $(function() {    
        codiad.MY_PLUGIN.init();
    });

    codiad.MY_PLUGIN = {
        
        // Allows relative `this.path` linkage
        controller: curpath + 'controller.php',
        path: curpath,

        init: function() {
            var _this = this;
            $.get(_this.controller + '?action=personal');
            alert('Ciao mondo');
            $('#sb-right a[onclick="codiad.MY_PLUGIN.start();"]').attr("onclick", "codiad.MY_PLUGIN.start();");

        },

        /**
         * 
         * This is where the core functionality goes, any call, references,
         * script-loads, etc...
         * 
         */
         
         start: function() {
            alert('Hello World');  
         }

    };

})(this, jQuery);
