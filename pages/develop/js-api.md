我们提供了丰富的 JS API 让您可以快速的调用 retalk。

## 初始化 retalk

```typescript
const retalk = new Retalk({
	el: "#some-id",
	server: "https://your_domain",
});
```

## 新增评论

```typescript
retalk.api.createComment({
	name: "评论发布者名称",
	email: "评论发布者邮箱",
	link: "评论发布者网站链接",
	body: "Markdown格式的评论正文",
});
```

## 获取所有评论

```typescript
retalk.getComments();
```

## 获取指定页面的评论

```typescript
retalk.getComments("页面的路径");
```

## 初始化服务端

```typescript
retalk.init({
	name: "管理员昵称",
	email: "管理员邮箱",
	link: "管理员网站链接",
	apikey: "设置APIKEY",
});
```

## 获取后端版本

```typescript
retalk.getServerVersion();
// -> "0.1.0"
```

# 获取前端版本

```typescript
// 注意，这里的 version 属性来自于 Retalk 类
Retalk.version;
// -> "0.1.0"
```
