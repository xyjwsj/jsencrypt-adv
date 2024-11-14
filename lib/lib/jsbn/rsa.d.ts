import { BigInteger } from "./jsbn";
export declare class RSAKey {
    constructor();
    doPublic(x: BigInteger): BigInteger;
    doPrivate(x: BigInteger): BigInteger;
    setPublic(N: string, E: string): void;
    encrypt(text: string): string;
    /**
     * 长文本加密
     * @param {string} string 待加密长文本
     * @returns {string} 加密后的base64编码
     */
    encryptLong(text: string): string;
    setPrivate(N: string, E: string, D: string): void;
    setPrivateEx(N: string, E: string, D: string, P: string, Q: string, DP: string, DQ: string, C: string): void;
    generate(B: number, E: string): void;
    decrypt(ctext: string, pubkey: boolean): string;
    /**
     * 长文本解密
     * @param {string} text 加密后的base64编码
     * @param {boolean} pubkey 是否公钥解密
     * @returns {string} 解密后的原文
     */
    decryptLong(text: string, pubkey: boolean): string | false;
    /**
     * 长文本解密
     * @param {string} text 加密后的base64编码
     * @param {boolean} pubkey 是否公钥解密
     * @returns {string} 解密后的原文
     */
    decryptLongAdv(text: Uint8Array, pubkey: boolean): string | false;
    generateAsync(B: number, E: string, callback: () => void): void;
    sign(text: string, digestMethod: (str: string) => string, digestName: string): string;
    verify(text: string, signature: string, digestMethod: (str: string) => string): boolean;
    protected n: BigInteger;
    protected e: number;
    protected d: BigInteger;
    protected p: BigInteger;
    protected q: BigInteger;
    protected dmp1: BigInteger;
    protected dmq1: BigInteger;
    protected coeff: BigInteger;
}
