const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('PpL2HjqPOU', uuidlib.v4());
	}

module.exports = generateId
