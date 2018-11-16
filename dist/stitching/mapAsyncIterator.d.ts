/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
export default function mapAsyncIterator<T, U>(iterator: AsyncIterator<T>, callback: (value: T) => Promise<U> | U, rejectCallback?: any): AsyncIterator<U>;
