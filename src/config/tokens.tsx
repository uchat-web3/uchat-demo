import { chainId } from "@/consts/parameters";
import { TokenInfo } from "@/entities/TokenInfoEntity";
import { isNull } from "@/utils/string";
export const tokens: { [index: string]: { [index: string]: TokenInfo } } = {
    usdt: {
        97: {
            contract: "0xF6Ba08f748c5B65bDBD4ab98252e5bF55430Ac39",
            decimal: 18,
            name: 'TetherUSD',
            symbol: 'USDT',
            lp: '',
            logo: '/token/usdt.png',
        }
    },
}


export function getToken(name: string) {
    if (isNull(name)) return tokens['usdt'][chainId].contract;
    return tokens[name.toLowerCase()][chainId].contract;
}


export function getTokenInfo(name: string): TokenInfo {
    if (isNull(name)) return new TokenInfo();
    return tokens[name.toLowerCase()][chainId.toString()];
}

export function getTokenContract(name: string): string {
    let tokenInfo = new TokenInfo();
    if (!isNull(name)) {
        tokenInfo = tokens[name.toLowerCase()][chainId];
    }
    return tokenInfo.contract;
}

export function getTokenDecimal(name: string): number {
    let tokenInfo = new TokenInfo();
    if (!isNull(name)) {
        tokenInfo = tokens[name.toLowerCase()][chainId];
    }
    return tokenInfo.decimal;
}

export function getTokenLp(name: string): string {
    let tokenInfo = new TokenInfo();
    if (!isNull(name)) {
        tokenInfo = tokens[name.toLowerCase()][chainId.toString()];
    }
    return tokenInfo.lp;
}

export function getTokenInfoByContract(contract: string): TokenInfo | null {
    const contractLower = contract.toLowerCase();
    for (const tokenGroup of Object.values(tokens)) {
        for (const tokenInfo of Object.values(tokenGroup)) {
            if (tokenInfo.contract.toLowerCase() === contractLower) {
                return tokenInfo;
            }
        }
    }
    return null; // Return null if no matching token is found
}

// Convert tokens to an array for easier mapping
export const tokenArray = Object.entries(tokens).flatMap(([_, tokenDetails]) => 
    Object.values(tokenDetails)
);