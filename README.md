# node-bank.js
 
> Get bank name by bank card no. 
>
> 根据银行卡卡号获取银行名称

## 安装

```
npm i @ionepub/node-bank --save
```

## 使用方法

### 根据银行卡卡号获取银行名称

```js
var Bank = require('@ionepub/node-bank');
var bank_card_no = '6222600260001072444'; // 银行卡卡号，可以是不完整的，如622260
var bank_name = Bank.get(bank_card_no);
console.log(bank_name); // 交通银行
```

### 获取银行名称列表

```js
var Bank = require('@ionepub/node-bank');
var bank_list = Bank.list();
console.log(bank_list);
```

