package java.net

public abstract class CacheRequest {

  public abstract InputStream getBody() ;
  public abstract Map<String,List<String>> getHeaders();

}
