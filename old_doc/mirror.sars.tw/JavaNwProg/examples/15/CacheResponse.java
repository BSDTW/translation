package java.net

public abstract class CacheResponse{

  public abstract InputStream getBody();
  public abstract Map<String,List<String>> getHeaders();

}
