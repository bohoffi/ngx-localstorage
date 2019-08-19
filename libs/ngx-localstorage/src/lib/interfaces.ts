/**
 * Created by bohoffi on 03.04.2017.
 */
export interface ModuleConfig {
  /**
   * Determines the key prefix. (Default: null)
   */
  prefix?: string;
  /**
   * Determines if null | 'null' values should be stored. (Default: true)
   */
  allowNull?: boolean;
}

export interface DecoratorOpts {
  key?: string;
  prefix?: string;
  nullTransformer?: () => any;
}
