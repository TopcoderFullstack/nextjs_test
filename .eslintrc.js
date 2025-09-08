module.exports = {
  // 设置代码运行环境 | Set the code execution environment
  env: {
    browser: true, // 浏览器环境全局变量 | Browser global variables
    es2022: true, // ES2022 语法支持 | ES2022 syntax support
    node: true, // Node.js 全局变量和作用域 | Node.js global variables and scoping
    // jest: true,      // Jest 测试全局变量（如需要请取消注释）| Jest global variables (uncomment if needed)
  },

  // 继承的配置规则 | Extended configuration rules
  extends: [
    "eslint:recommended", // ESLint 推荐规则 | ESLint recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript 推荐规则 | TypeScript recommended rules
    "plugin:@typescript-eslint/strict", // TypeScript 严格规则 | TypeScript strict rules
    "plugin:prettier/recommended", // Prettier 推荐配置，必须放最后 | Prettier recommended config, must be last
  ],

  // 解析器配置 | Parser configuration
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest", // 使用最新的 ECMAScript 版本 | Use latest ECMAScript version
    sourceType: "module", // 使用 ES6 模块 | Use ES6 modules
    project: "./tsconfig.json", // TypeScript 项目配置文件 | TypeScript project config file
    tsconfigRootDir: __dirname, // tsconfig.json 的根目录 | Root directory of tsconfig.json
    ecmaFeatures: {
      jsx: true, // 启用 JSX 支持 | Enable JSX support
      // impliedStrict: true,                    // 启用全局严格模式（如需要请取消注释）| Enable global strict mode (uncomment if needed)
    },
  },

  // 使用的插件 | Plugins used
  plugins: [
    "@typescript-eslint", // TypeScript ESLint 插件 | TypeScript ESLint plugin
    "prettier", // Prettier 插件 | Prettier plugin
    "react", // React 插件 | React plugin
    "react-hooks", // React Hooks 插件 | React Hooks plugin
    // 'import',                                 // import/export 语法检查（如需要请取消注释）| import/export syntax checking (uncomment if needed)
  ],

  // 自定义规则配置 | Custom rules configuration
  rules: {
    // TypeScript 相关规则 | TypeScript related rules
    "@typescript-eslint/no-explicit-any": "error", // 禁止使用 any 类型 | Disallow any type
    "@typescript-eslint/explicit-function-return-type": "error", // 要求函数显式返回类型 | Require explicit return types on functions
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // 未使用变量检查 | Check for unused variables
        argsIgnorePattern: "^_", // 忽略下划线开头的参数 | Ignore parameters starting with underscore
        varsIgnorePattern: "^_", // 忽略下划线开头的变量 | Ignore variables starting with underscore
        caughtErrorsIgnorePattern: "^_", // 忽略下划线开头的错误对象 | Ignore error objects starting with underscore
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        // 强制类型导入的一致性 | Enforce consistent type imports
        prefer: "type-imports", // 优先使用 type imports | Prefer type imports
        disallowTypeAnnotations: true, // 禁止内联类型导入 | Disallow inline type imports
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "error", // 禁止非空断言 | Disallow non-null assertions
    "@typescript-eslint/strict-boolean-expressions": "error", // 严格的布尔表达式 | Strict boolean expressions

    // 通用 JavaScript/TypeScript 规则 | General JavaScript/TypeScript rules
    "no-console": ["error", { allow: ["warn", "error"] }], // 限制 console 使用 | Restrict console usage
    "no-debugger": "error", // 禁止 debugger | Disallow debugger
    "prefer-const": "error", // 优先使用 const | Prefer const
    "no-var": "error", // 禁止使用 var | Disallow var
    "object-shorthand": "error", // 强制对象字面量简写 | Enforce object literal shorthand
    "prefer-template": "error", // 优先使用模板字符串 | Prefer template literals
    "prefer-arrow-callback": "error", // 优先使用箭头函数 | Prefer arrow functions
    "arrow-body-style": ["error", "as-needed"], // 箭头函数体风格 | Arrow function body style
    curly: ["error", "all"], // 强制使用花括号 | Enforce braces
    eqeqeq: ["error", "always"], // 要求使用 === 和 !== | Require === and !==
    "no-nested-ternary": "error", // 禁止嵌套三元表达式 | Disallow nested ternary
    "no-unneeded-ternary": "error", // 禁止不必要的三元表达式 | Disallow unnecessary ternary
    "spaced-comment": ["error", "always"], // 注释空格要求 | Comment spacing requirements

    // React 相关规则 | React related rules
    "react/react-in-jsx-scope": "off", // Next.js 不需要导入 React | Next.js doesn't need React import
    "react-hooks/rules-of-hooks": "error", // Hooks 规则 | Hooks rules
    "react-hooks/exhaustive-deps": "error", // Hooks 依赖检查 | Hooks dependency check

    // Prettier 冲突规则（已被 eslint-config-prettier 禁用）| Rules conflicting with Prettier (disabled by eslint-config-prettier)
    "prettier/prettier": "error", // Prettier 格式化错误 | Prettier formatting errors

    // 其他可选规则（根据项目需求取消注释）| Other optional rules (uncomment as needed)
    // 'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],  // 禁止魔法数字 | Disallow magic numbers
    // 'max-lines': ['error', { max: 300 }],                   // 文件最大行数限制 | Maximum file lines limit
    // 'max-depth': ['error', 3],                              // 最大嵌套深度 | Maximum nesting depth
    // 'complexity': ['error', 10],                            // 圈复杂度限制 | Cyclomatic complexity limit
  },

  // 针对特定文件的规则覆盖 | Rules overrides for specific files
  overrides: [
    {
      // 测试文件规则 | Test files rules
      files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off", // 测试文件中允许使用 any | Allow any in test files
        "no-console": "off", // 测试文件中允许 console | Allow console in test files
      },
    },
    {
      // 配置文件规则 | Configuration files rules
      files: ["*.config.js", "*.config.ts"],
      rules: {
        "no-console": "off", // 配置文件中允许 console | Allow console in config files
      },
    },
  ],

  // 忽略的文件和目录 | Ignored files and directories
  ignorePatterns: [
    "node_modules/", // 依赖目录 | Dependencies directory
    "dist/", // 构建输出目录 | Build output directory
    "build/", // 构建目录 | Build directory
    "coverage/", // 测试覆盖率目录 | Test coverage directory
    "*.min.js", // 压缩文件 | Minified files
    "*.d.ts", // 类型声明文件 | Type declaration files
    ".eslintrc.js", // ESLint 配置文件自身 | ESLint config file itself
    // 'public/',              // 公共资源目录（如需要请取消注释）| Public assets directory (uncomment if needed)
    // '*.generated.ts',       // 生成的文件（如需要请取消注释）| Generated files (uncomment if needed)
  ],

  // 全局变量配置 | Global variables configuration
  globals: {
    // MyGlobal: 'readonly',  // 自定义全局变量（如需要请取消注释）| Custom global variables (uncomment if needed)
  },

  // 设置共享配置 | Shared settings
  settings: {
    // 'import/resolver': {   // import 插件解析器配置（如使用 import 插件请取消注释）| import plugin resolver config (uncomment if using import plugin)
    //   typescript: {},
    // },
  },
}
