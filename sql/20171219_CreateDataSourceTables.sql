IF NOT EXISTS ( SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = N'BASE TABLE'
	AND TABLE_NAME = 'DataSource' )
BEGIN
	PRINT 'Creating table DataSource...';
	
	CREATE TABLE [dbo].[DataSource]
	(
		DataSourceId			INT IDENTITY(1,1) NOT NULL
		URI						VARCHAR(20) NOT NULL,
		SourceNameId			INT
		
	) ON [PRIMARY]
	
	PRINT 'Complete.';
END
ELSE
BEGIN
	PRINT 'DataSource already exists.';
END

GO

IF NOT EXISTS ( SELECT 1 FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = N'BASE TABLE'
	AND TABLE_NAME = 'SourceName' )
BEGIN
	PRINT 'Creating table SourceName...';
	
	CREATE TABLE [dbo].[SourceName]
	(
		SourceNameId		INT IDENTITY(1,1) NOT NULL
		Name				VARCHAR(50) NOT NULL
		
	) ON [PRIMARY]
	
	PRINT 'Complete.';
END
ELSE
BEGIN
	PRINT 'SourceName already exists.';
END

GO