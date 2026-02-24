# API 开发提示词

请帮我创建一个 RESTful API，包含以下要求：

## 技术栈
- Node.js + Express 或 Fastify
- TypeScript
- [数据库: PostgreSQL/MongoDB]

## API 端点
```
POST   /api/users          # 创建用户
GET    /api/users/:id      # 获取用户
PUT    /api/users/:id      # 更新用户
DELETE /api/users/:id      # 删除用户
GET    /api/users          # 列表用户
```

## 功能要求
1. 输入验证 (validation)
2. 错误处理 (error handling)
3. 日志记录 (logging)
4. 单元测试
5. API 文档

## 认证
- JWT Token 认证
- 密码加密存储 (bcrypt)

## 输出
请输出完整的项目结构和核心代码。
