/**
 * Created by Masha on 11/4/2014.
 */
define(function(){
    function SetModelPositionMessage(nodePositions, guid, name){
        this.$type = 'DynamoWebServer.Messages.SetModelPositionMessage, DynamoWebServer';
        this.ModelPositions = nodePositions || [];
        this.WorkspaceGuid = guid;
        this.WorkspaceName = name;
    }

    return SetModelPositionMessage;
});