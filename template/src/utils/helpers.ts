function getObjectKeys<K extends string, T>(obj: Record<K, T>): Record<K, K> {
  const res = {} as { [key: string]: string }
  Object.keys(obj).forEach((propName) => (res[propName] = propName))
  return res as Record<K, K>
}

export default function objectKeys<K extends string, T>(obj: Record<K, T>): Readonly<Record<K, K>> {
  return getObjectKeys(obj)
}
