# RadilMenu 径向菜单

### 基础用法

<code src="../src/demo/basic.tsx"/>

### 多级嵌套

<code src="../src/demo/nesting.tsx"/>

### 构造 RadialMenuItem

<code src="../src/demo/build.tsx"/>

### 核心函数

径向菜单计算函数在源码中的 utils 文件中 。你可以利用该函数，重新封装径向菜单

其他细节请查看 item.tsx 文件

<code src="../src/demo/compute.tsx"/>

### API

#### RadialMenu

| 属性           | 描述                                                                              | 类型                 | 默认值 |
| -------------- | --------------------------------------------------------------------------------- | -------------------- | ------ |
| radialMenuData | radialMenuData 数据，如果设置则不需要手动构造 Item 节点（key 在整个树范围内唯一） | `radialMenuDataType` | --     |
| onClick        | 点击元素时触发                                                                    | `onClickFn`          | --     |
| classNames     | class 属性                                                                        | `string`             | --     |

#### RadialMenu.Item

| 属性        | 描述                                               | 类型              | 默认值 |
| ----------- | -------------------------------------------------- | ----------------- | ------ |
| defaultOpen | 是否默认展开, 只在初始化时有效                     | `boolean`         | false  |
| status      | 当前的状态                                         | `open \| close`   | close  |
| isRoot      | 是否为根节点                                       | `boolean`         | false  |
| content     | 内容，替代原本的 children                          | `React.ReactNode` | --     |
| id          | ID                                                 | `any`             | --     |
| angleExtent | 角度范围 angleExtent < 360 \|\| angleExtent > -360 | `number`          | --     |
| radius      | 半径                                               | `number`          | --     |
| offset      | 起始偏移量                                         | `number`          | --     |
| onClick     | 点击时触发                                         | `onClickFn`       | --     |
| x           | 根据公式计算后的 x 轴的值(内部计算好的）           | `number`          | --     |
| y           | 根据公式计算后的 y 轴的值(内部计算好的）           | `number`          | --     |
