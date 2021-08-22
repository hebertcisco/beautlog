// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import log from "log-beautify";

class Console {
    public static trace(value: any) {
        return log.trace(value);
    }
    public static success(value: any) {
        return log.success(value);
    }
    public static ok(value: any) {
        return log.ok(value);
    }

    public static debug(value: any) {
        return log.debug(value);
    }

    public static info(value: any) {
        return log.info(value);
    }
    public static warning(value: any) {
        return log.warning(value);
    }
    public static warn(value: any) {
        return log.warn(value);
    }
    public static error(value: any) {
        return log.error(value);
    }
}
export default Console
