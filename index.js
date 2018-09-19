/*!
 * node-bank v1.0.1
 * https://github.com/ionepub/node-bank
 *
 * Licensed MIT © ionepub
 */
'use strict';
var Bank;
(function(owner){
	/**
	 * 银行卡卡号前缀数字
	 */
	var prefix = '';

	/**
	 * 银行卡数据列表
	 */
	var fs = require("fs");
	var _bank_list = fs.readFileSync(__dirname+"/res.json"); // __dirname 当前文件所在文件夹
	_bank_list = JSON.parse(_bank_list);

	/**
	 * 银行卡号正则
	 */
	var reg = /[0-9]{2,10}/;

	/**
	 * 银行名称列表
	 */
	var _bank_name_arr = [];

	/**
	 * 检查获取银行名称
	 * @param {string} bank_code 银行卡卡号
	 * @param {int}    length    前缀长度
	 * @return {string|false}    未找到时返回false，否则返回银行名称
	 */
	var _check = function(bank_code, length){
		length = parseInt(length);
		if(length < 2 || length > 10){
			return false;
		}
		prefix = bank_code.substr(0, length);

		if(typeof _bank_list[prefix] === 'string'){
			return _bank_list[prefix];
		}

		return false;
	}

	/**
	 * 获取银行名称主方法
	 * @param {string} bank_code 银行卡卡号
	 * @return {string}    未找到时返回空字符串，否则返回银行名称
	 */
	owner.get = function(bank_code){
		if(!reg.test(bank_code)){
			return '';
		}
		for (var i = 10; i >= 2; i--) {
			var result = _check(bank_code, i);
			if(result){
				return result;
				break;
			}
		}
		return '';
	};

	/**
	 * 获取银行名称列表
	 * @return {object} 银行名称数组
	 */
	owner.list = function(){
		if( _bank_name_arr.length == 0 ){
			var tmp = fs.readFileSync(__dirname+"/list.json"); // __dirname 当前文件所在文件夹
			_bank_name_arr = JSON.parse(tmp);
		}
		return _bank_name_arr;
	}

})(Bank = {});

module.exports = Bank;