import crypto from "crypto";

/**
 * @param bytes
 * Number of bytes to generate (e.g., 32 bytes = 256 bits); defaults to 32
 * @param encoding
 * Encoding of the output string (e.g., "hex", "base64"); defaults to "hex"
 * @returns
 * A random string of bytes encoded in the specified format
 */
export function generateRandomAPIKey(
  bytes: number = 32,
  encoding: BufferEncoding = "hex"
): string {
  return crypto.randomBytes(bytes).toString(encoding);
}
