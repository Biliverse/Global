export interface Settings {
    /**
     * 强制CDN主机名类型
     *
     * 请设置强制返回的CDN主机名类型。
     *
     * @remarks
     *
     * Possible values:
     * - `'0'` - IP: 返回远端DNS解析地址（强烈不推荐！严重影响域名分流规则与CDN重定向）
     * - `'1'` - HTTP: 返回HTTP域名（推荐，免去重定向时MitM操作）
     * - `'2'` - HTTPS: 返回HTTPS域名（不推荐，重定向时需对指定域名启用MitM）
     *
     * @defaultValue "1"
     */
    ForceHost?: '0' | '1' | '2';
    /**
     * 启用自动识别与分流功能的地区
     *
     * 请选择启用自动识别与分流功能的地区。
     *
     * @remarks
     *
     * Possible values:
     * - `'CHN'` - 🇨🇳中国大陆
     * - `'HKG'` - 🇭🇰中国香港
     * - `'MAC'` - 🇲🇴中国澳门
     * - `'TWN'` - 🇹🇼中国台湾
     *
     * @defaultValue ["CHN","HKG","TWN"]
     */
    Locales?: ('CHN' | 'HKG' | 'MAC' | 'TWN')[];
    Proxies?: {
    /**
         * [🇨🇳中国大陆] 代理策略名称
         *
         * 请填写此地区的代理或策略组名称。
         *
         * @defaultValue "DIRECT"
         */
        CHN?: string;
    /**
         * [🇭🇰中国香港] 代理策略名称
         *
         * 请填写此地区的代理或策略组名称。
         *
         * @defaultValue "🇭🇰香港"
         */
        HKG?: string;
    /**
         * [🇲🇴中国澳门] 代理策略名称
         *
         * 请填写此地区的代理或策略组名称。
         *
         * @defaultValue "🇲🇴澳门"
         */
        MAC?: string;
    /**
         * [🇹🇼中国台湾] 代理策略名称
         *
         * 请填写此地区的代理或策略组名称。
         *
         * @defaultValue "🇹🇼台湾"
         */
        TWN?: string;
};
    /**
     * [储存] 配置类型
     *
     * 选择要使用的配置类型。未设置此选项或不通过此选项的旧版本的配置顺序依旧是 PersistentStore (BoxJs) > $argument > database。
     *
     * @remarks
     *
     * Possible values:
     * - `'Argument'` - 优先使用来自 $argument 的配置，$argument 不包含的设置项由 PersistentStore (BoxJs) 提供
     * - `'PersistentStore'` - 只使用 PersistentStore (BoxJs) 提供的配置
     * - `'database'` - 只使用由作者的 database.mjs 文件提供的默认配置，其他任何自定义配置不再起作用
     *
     * @defaultValue "Argument"
     */
    Storage?: 'Argument' | 'PersistentStore' | 'database';
    /**
     * [调试] 日志等级
     *
     * 选择脚本日志的输出等级，低于所选等级的日志将全部输出。
     *
     * @remarks
     *
     * Possible values:
     * - `'OFF'` - 关闭
     * - `'ERROR'` - ❌ 错误
     * - `'WARN'` - ⚠️ 警告
     * - `'INFO'` - ℹ️ 信息
     * - `'DEBUG'` - 🅱️ 调试
     * - `'ALL'` - 全部
     *
     * @defaultValue "WARN"
     */
    LogLevel?: 'OFF' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'ALL';
}
