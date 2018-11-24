/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param width - Width of a stripe.
 * @returns adidas logo.
 */
export function createAdidasAsciiLogo(width: number): string {
  if (width < 2) {
    throw new Error('Error, minimun width is 2');
  }

  const height: number = Math.round(Math.sqrt(width));
  const stripe = '@'.repeat(width);
  const space = ' '.repeat(height);
  // The 'invisible' stripe
  const whiteSpace = ' '.repeat(width);

  const logo: Array<string> = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < height; j++) {
      const stripes = `${space}${stripe}`.repeat(3 - i);
      const prevSpace = `${whiteSpace}`.repeat(i);

      const row = `${prevSpace}${stripes}`;

      // Skipping the first character because of an extra space added.
      logo.push(row.substring(j + 1));
    }
  }

  return logo.reverse().join('\n');
}
