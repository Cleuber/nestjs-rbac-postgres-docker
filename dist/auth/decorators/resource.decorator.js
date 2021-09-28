"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const common_1 = require("@nestjs/common");
const Resource = (resource) => {
    return (0, common_1.SetMetadata)('resource', resource);
};
exports.Resource = Resource;
//# sourceMappingURL=resource.decorator.js.map