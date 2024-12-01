const AUTH: string | undefined = process.env.REACT_APP_AUTH;

export const authCheck = (): number => {
    if (localStorage.length === 0) { // LocalStorage가 깨끗하면 종료
        return 0;
    }

    const key:string = localStorage.key(0) as string;
    if (localStorage.getItem(key) !== AUTH) { // LocalStorage 임의 삽입 방지
        return 0;
    }
    return 1;
}