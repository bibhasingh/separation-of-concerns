/**
 *
 */
export const typeCaster = (stringToCast,intendedType='') => {

    if (intendedType === 'string') {
        return String(stringToCast);
      } else if (intendedType === 'number') {
        return Number(stringToCast);
      } else if (intendedType === 'boolean') {
        return Boolean(stringToCast);
      } else {
        return undefined;
      }
};
