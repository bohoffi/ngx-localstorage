export class Version {
  public readonly major: string;
  public readonly minor: string;
  public readonly patch: string;

  constructor(public readonly fullVersion: string) {
    const [major, minor, patch] = fullVersion.split('.');
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
}
