"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const _ = require('underscore');
let ResourceGuard = class ResourceGuard {
    constructor(reflector, userRepo) {
        this.reflector = reflector;
        this.userRepo = userRepo;
    }
    canActivate(context) {
        const resource = this.reflector.get('resource', context.getHandler());
        const req = context.switchToHttp().getRequest();
        if (resource) {
            return this.userRepo.findOne(req.user.id, {
                relations: ['roles'],
            }).then(user => {
                if (!(user instanceof user_entity_1.User)) {
                    return false;
                }
                let resources = user.roles.map(role => {
                    return JSON.parse(role.resources);
                });
                let permissions = _.unique(_.flatten(resources));
                return permissions.includes(resource);
            }).catch(err => {
                console.log('Failed to find user', err);
                return false;
            });
        }
        return true;
    }
};
ResourceGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ResourceGuard);
exports.ResourceGuard = ResourceGuard;
//# sourceMappingURL=resource.guards.js.map