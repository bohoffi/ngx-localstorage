/**
 * Provides the configuration used by {@link LocalStorageService}.
 */
export interface NgxLocalstorageConfiguration {
    /**
     * Determines the key prefix. (Default: null)
     */
    prefix?: string;
    /**
     * Determines if null | 'null' values should be stored. (Default: true)
     */
    allowNull?: boolean;
    /**
     * Determines the storage type. (Default: localStorage)
     */
    storage?: Storage
    /**
     * Determines the delimiter, will used befoure key. (Default: _)
     */
     delimiter?: string
}
