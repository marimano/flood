define(['AbstractRunner'], function (AbstractRunner) {
    return AbstractRunner.extend({
        initialize: function (atts, vals) {
            AbstractRunner.prototype.initialize.call(this, atts, vals);
        },

        onWorkerMessage: function (data) {

            var cb = this["on_" + data.kind];
            if (cb) cb.call(this, data);

        },

        initWorker: function () {

            this.worker = new Worker('scripts/lib/flood/flood_runner.js');

            this.worker.addEventListener('message', function (e) {
                return this.onWorkerMessage(e.data);
            }.bind(this), false);

        },

        postMessage: function (data, quiet) {

            if (!data.workspace_id){
                data.workspace_id = this.workspace.get('_id');
            }
            this.worker.postMessage(data);

            AbstractRunner.prototype.postMessage.call(this, data, quiet);

        },

        cancel: function () {

            this.worker.terminate();
            AbstractRunner.prototype.cancel.call(this);

        },

        reset: function () {

            this.initWorker();
            AbstractRunner.prototype.reset.call(this);

        }
    });
});