"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoryMockFactory = void 0;
exports.repositoryMockFactory = jest.fn(() => ({
    findOne: jest.fn(entity => entity),
}));
//# sourceMappingURL=utils.js.map