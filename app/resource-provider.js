createProvider = function(module, entityName) {
    module.factory(entityName+"Service", function($http, $resource){
        var server = 'http://172.24.1.113:3000/api';
        var getEntities = function(token, url) {
            if(!url) {
                url = "";
            }
            $http.defaults.headers.common['Authorization']= token;
            return $resource(server + '/'+entityName+'s'+url+'/:entityId', {entityId:'@id'}, {
                'update': { method:'PUT' }
            });
        };
        return {
            getOne: function (entityId, token) {
                return getEntities(token, '').get({entityId: entityId}).$promise;
            },
            getAll : function (token) {
                return getEntities(token, '').query().$promise;
            },
            insert: function(entity, token, url) {
                return getEntities(token,url).save(entity).$promise;
            },
            deleteOne: function (entity, token) {
                return getEntities(token, '').$delete().$promise;
            }
        }
    })
};
