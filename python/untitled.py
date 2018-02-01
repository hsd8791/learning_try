#!/usr/bin/python
# -*- coding: UTF-8 -*-
print '1'
print ""'1'""
print ''' sad'''

'''
hahah
'''

raw_input("按下 enter 键退出，其他任意键显示...\n")

print ''' sad'''
raw_input("按下 enter 键退出，其他任意键显示...")
import sys; x = 'runoob'; sys.stdout.write(x + '\n')

x=1
y=2.2
# 换行输出
print x
print y

print '---------'
# 不换行输出
print x,
print y,

# 不换行输出
print x,y

s = 'ilovepython'
print s[1:5]
print s[0:5]
print s[5:-1]

list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']
 
print list               # 输出完整列表
print list[0]            # 输出列表的第一个元素
print list[1:3]          # 输出第二个至第三个元素 
print list[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinylist * 2       # 输出列表两次
print list + tinylist    # 打印组合的列表




dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
 
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
 
 
print dict['one']          # 输出键为'one' 的值
print dict[2]              # 输出键为 2 的值
print tinydict             # 输出完整的字典
print tinydict.keys()      # 输出所有键
print tinydict.values()    # 输出所有值



