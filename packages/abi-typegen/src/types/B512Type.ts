import { B256Type } from './B256Type';

export class B512Type extends B256Type {
  public static swayType = 'b512';

  public name = 'b512';

  static MATCH_REGEX = /^b512$/m;

  static isSuitableFor(params: { type: string }) {
    return B512Type.MATCH_REGEX.test(params.type);
  }
}
